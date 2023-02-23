migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eicl7v71bf86gkq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v9rz29sz",
    "name": "agrupamento",
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
  collection.schema.removeField("v9rz29sz")

  return dao.saveCollection(collection)
})
