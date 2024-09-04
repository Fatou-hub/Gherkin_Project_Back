import os
import json
from pathlib import Path
import random
import string
from pymongo import MongoClient


# Lecture du fichier de configuration JSON
#objectif : éviter d'avoir un chemin en "dur" pour que les autres puisse récupérer le code en local et le faire fonctionner
with open('config.json') as f:
    config = json.load(f)

feature_directory = config['feature_directory']

# fonction qui récupère tous les sous dossiers du path après ".feature"
def get_all_subdirectories(directory):
    subdirectories = []
    for name in os.listdir(directory):
        if os.path.isdir(os.path.join(directory, name)):
            subdirectories.append(name)
    return subdirectories

#fonction qui concatène les sous-dossiers + les fichiers ".feature"
def get_all_feature_files_with_paths(directory):
    files_with_paths = []
    for root, _, files in os.walk(directory):
        # print(f"Les 'fichers.feature' du sous-dossier '{root}' sont ici:")
        for file in files:
            if file.endswith('.feature'):
                file_path = os.path.join(root, file)
                files_with_paths.append(file_path)
                print(file_path)
    return files_with_paths
get_all_feature_files_with_paths(feature_directory)


def generate_random_id(length=12):
    # Génère un ID aléatoire de la longueur spécifiée
    return ''.join(random.choices(string.digits, k=length))

# fonction qui extrait tous les éléments à l'intérieur des fichiers ".feature" (Feature, scénarios, Given, when, then, tags etc..)
def extract_feature_elements(file_paths):
    all_features = [] # tableau qui est renvoyé avec toute la structure des éléments extraits
    for path in file_paths:
        feature_data = {}
        feature_elements = {
            "id": generate_random_id(),
            "name": None,
            "path": path,
            "tags": [],
            "scenarios": []
        }
        id_counter = {
            "Scenario": generate_random_id(),
            "Steps": generate_random_id()
        }
        current_scenario = None
        # Extracting the filename without extension
        filename = os.path.basename(path)
        feature_name = os.path.splitext(filename)[0]
        # Assigning the feature name
        feature_data["name"] = feature_name
        with open(path, 'r', encoding='utf-8') as file:
            content = file.readlines()
            for line in content:
                line = line.strip()
                if line.startswith("Feature"):
                    feature_data["name"] = line.split(":")[1].strip()
                elif line.startswith("Scenario"):
                    if current_scenario:
                        feature_elements["scenarios"].append(current_scenario)
                    current_scenario = {"id": id_counter["Scenario"], "name": line.split(":")[1].strip(), "tags": [], "steps": []}
                    id_counter["Scenario"] = generate_random_id()
                elif line.startswith("@"):
                    if current_scenario:
                        tags = [tag.strip() for tag in line.split("@") if tag.strip() != ""]
                        current_scenario["tags"].extend(tags)
                    else:
                        tags = [tag.strip() for tag in line.split("@") if tag.strip() != ""]
                        feature_elements["tags"].extend(tags)
                elif line.startswith("Given") or line.startswith("When") or line.startswith("And") or line.startswith("Then"):
                    if current_scenario:
                        current_scenario["steps"].append({"id": id_counter["Steps"], "value": line})
                        id_counter["Steps"] = generate_random_id()
        if current_scenario:
            feature_elements["scenarios"].append(current_scenario)
        feature_data["feature"] = feature_elements
        all_features.append(feature_data)
    return all_features


def process_feature_files(directory):
    feature_contents = {}
    for subDirectory in get_all_subdirectories(directory):
        subDirectoryPath = os.path.join(directory, subDirectory)
        feature_contents[subDirectory] = {
            'subdirectories': get_all_subdirectories(subDirectoryPath),
            'featurefiles': get_all_feature_files_with_paths(subDirectoryPath)
        }
    return feature_contents

def print_feature_contents():
    result = []
    for directory in feature_contents.values():
        for file_path in directory['featurefiles']:
            file_name = os.path.basename(file_path)
            # Removing the '.feature' extension from the file name
            file_name = os.path.splitext(file_name)[0]
            file_content = {
                "file_name": file_name,
                "content": extract_feature_elements([file_path])
            }
            result.append(file_content)
    return result

def steps_details():
    feature_details = {}
    for directory in feature_contents.values():
        for file_path in directory['featurefiles']:
            file_name = os.path.basename(file_path)
            # Removing the '.feature' extension from the file name
            file_name = os.path.splitext(file_name)[0]
            elements = extract_feature_elements([file_path])
            feature_details[file_name] = elements
    return feature_details


feature_contents = process_feature_files(feature_directory)

refactored_variable = json.dumps(steps_details(), indent=4)

feature_output_contents = 'gherkin_datas/feature_output.json'

Path("gherkin_datas").mkdir(parents=True, exist_ok=True)
try:
    with open(feature_output_contents, 'w') as feature_output_contents_file:
        feature_output_contents_file.write(refactored_variable)
    print('File created')
except OSError:
    print('Failed creating the file')

def insert_to_mongodb(json_file, db_name, collection_name):
    client = MongoClient('mongodb://localhost:27017/')
    db = client[db_name]
    collection = db[collection_name]

    with open(json_file, "r", encoding='utf-8') as file:
        data = json.load(file)
    
    # Insertion des données dans MongoDB
    if isinstance(data, list):
        collection.insert_many(data)
    else:
        collection.insert_one(data)

    print('Data inserted into MongoDB')

# Insertion des données du fichier feature_output.json dans MongoDB
insert_to_mongodb('gherkin_datas/feature_output.json', 'gherkin_dictionary_DB', 'tests')