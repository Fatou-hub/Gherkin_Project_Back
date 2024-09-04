
from mongodb import MongoDB

def test_connect():
    mongo_instance = MongoDB()
    mongo_instance.connect('test_database')
    assert mongo_instance.db.name == 'test_database'
    mongo_instance.disconnect()






