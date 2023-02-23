migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eicl7v71bf86gkq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ti1nqdvc",
    "name": "status",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eicl7v71bf86gkq")

  // remove
  collection.schema.removeField("ti1nqdvc")

  return dao.saveCollection(collection)
})
