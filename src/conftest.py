
import pytest
from mongodb import MongoDB 
from pymongo import MongoClient

@pytest.fixture(scope='module')
def mongodb_client():
    client = MongoClient('mongodb://root:mypassword@localhost:27017/')
    yield client
    client.close()

@pytest.fixture(scope='module')
def test_db(mongodb_client):
    db_name = 'test_database'
    db = mongodb_client[db_name]
    yield db
    mongodb_client.drop_database(db_name)

@pytest.fixture(scope='function')
def mongo_instance(test_db):
    mongo = MongoDB(username='root', password='mypassword')
    mongo.client = test_db.client
    mongo.db = test_db
    yield mongo
    mongo.db.client.drop_database(mongo.db.name)
