from mongodb import MongoDB

def main():
    print("main example script vv")

    # Connect to MongoDB
    db = MongoDB(username='root', password='mypassword')
    db.connect(db_name='mydb')
    
    # Extract features and insert into MongoDB
    json_file = "../gherkin_datas/feature_output.json"
    features = db.extract_feature_elements(json_file)
    scenarios = db.extract_scenarios_elements(json_file)
    steps = db.extract_steps_elements(json_file)
    
    # check that document list is not empty before inserting them into the database
    if features:
        db.insert_documents(collection_name='features', documents=features)
    else:
        print("No features to insert.")

    if scenarios:
        db.insert_documents(collection_name='scenarios', documents=scenarios)
    else:
        print("No scenarios to insert.")
    
    if steps:
        db.insert_documents(collection_name='steps', documents=steps)
    else:
        print("No steps to insert")


if __name__ == "__main__":
    main()
