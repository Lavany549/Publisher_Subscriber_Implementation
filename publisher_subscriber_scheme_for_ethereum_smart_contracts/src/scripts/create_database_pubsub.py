import pymongo
import json
import time
import random

# create a MongoClient object
client = pymongo.MongoClient("mongodb://localhost:27017/")

# create a database object
db = client["pubsub"]

# create a collection object
collection = db["userdatas"]

# read data from JSON file
with open('data.json') as f:
    data = json.load(f)

s = time.time()


# insert data into collection one by one
for record in data:
    collection.insert_one(record)
    #time.sleep(random.uniform(0, 0.05)) # add a random wait of up to 50 ms between each record
print(str(len(data))+" entries successfully inserted")



e = time.time()

print("Time elapsed = " + str(e - s))


# create a collection object
collection = db["subscriptions"]

# read data from JSON file
with open('subscription_1.json') as f:
    data = json.load(f)







s = time.time()
# insert data into collection one by one
for record in data:
    collection.insert_one(record)

e = time.time()

print("Time elapsed = " + str(e - s))
    #time.sleep(random.uniform(0, 0.05)) # add a random wait of up to 50 ms between each record
print(str(len(data))+" entries successfully inserted")






# create a collection object
collection = db["topics"]

# read data from JSON file
with open('topic_1.json') as f:
    data = json.load(f)




s = time.time()

# insert data into collection one by one
for record in data:
    collection.insert_one(record)
    #time.sleep(random.uniform(0, 0.05)) # add a random wait of up to 50 ms between each record


e = time.time()

print("Time elapsed = " + str(e - s))



print(str(len(data))+" entries successfully inserted")
