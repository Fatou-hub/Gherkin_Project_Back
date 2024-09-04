from pymongo import MongoClient
import os
import json

class MongoDB:
    def __init__(self):
        self.username = os.getenv('MONGO_INITDB_ROOT_USERNAME', 'root')
        self.password = os.getenv('MONGO_INITDB_ROOT_PASSWORD', 'mypassword')
        self.host = os.getenv('MONGO_HOST', 'localhost')
        self.port = int(os.getenv('MONGO_PORT', 27017))
        self.client = None
        self.db = None

    def connect(self, db_name):
        try:
            uri = f'mongodb://{self.username}:{self.password}@{self.host}:{self.port}/{db_name}'
            self.client = MongoClient(uri)
            self.db = self.client[db_name]
            print("Connexion successful")
            print(self.db)
        except Exception as e:
            print(f"Connexion error: {str(e)}")

    def disconnect(self):
        if self.client:
            self.client.close()
            print("Disconnected from MongoDB")


    def insert_documents(self, collection_name, documents):
        print("inserting...")
        try:
            result = self.db[collection_name].insert_many(documents)
            print(f"{len(result.inserted_ids)} records inserted successfully")
        except Exception as e:
            print(f"Error inserting records: {str(e)}")

    def find_documents(self, collection_name, query=None):
        try:
            documents = self.db[collection_name].find(query or {})
            for doc in documents:
                print(doc)
        except Exception as e:
            print(f"Error finding records: {str(e)}")

    def disconnect(self):
        try:
            if self.client:
                self.client.close()
                print("Disconnected from MongoDB")
        except Exception as e:
            print(f"Error disconnecting from MongoDB: {str(e)}")

    def extract_feature_elements(self, json_file):
        with open(json_file, "r", encoding='utf-8') as file:
            data = json.load(file)

        features_list = []

        for key, features in data.items():
            for feature_data in features:
                feature = feature_data.get("feature", {})
                feature_dict = {
                    "id": feature.get("id", ""),  # Utilisation de l'ID de feature comme _id
                    "name": feature.get("name", ""),
                    "tags": feature.get("tags", []),
                    "path": feature.get("path", "")
                }
                features_list.append(feature_dict)

        return features_list

    def extract_scenarios_elements(self, json_file):
        with open(json_file, "r", encoding='utf-8') as file:
            data = json.load(file)

        scenarios_list = []

        for key, features in data.items():
            for feature_data in features:
                feature = feature_data.get("feature", {})
                feature_id = feature.get("id", "")
                scenarios = feature.get("scenarios", [])
                for scenario in scenarios:
                    scenario_dict = {
                        "id": scenario.get("id", ""),  # Utilisation de l'ID de scenario comme _id
                        "feature_id": feature_id,
                        "name": scenario.get("name", ""),
                        "tags": scenario.get("tags", [])
                    }
                    scenarios_list.append(scenario_dict)

        return scenarios_list

    def extract_steps_elements(self, json_file):
        with open(json_file, "r", encoding='utf-8') as file:
            data = json.load(file)

        steps_list = []

        for key, features in data.items():
            for feature_data in features:
                feature = feature_data.get("feature", {})
                feature_id = feature.get("id", "")
                scenarios = feature.get("scenarios", [])
                for scenario in scenarios:
                    scenario_id = scenario.get("id", "")
                    steps = scenario.get('steps', [])
                    for step in steps:
                        step_dict = {
                            "id": step.get("id", ""),  # Utilisation de l'ID de step comme _id
                            "feature_id": feature_id,
                            "scenario_id": scenario_id,
                            "value": step.get('value', '')
                        }
                        steps_list.append(step_dict)

        return steps_list

