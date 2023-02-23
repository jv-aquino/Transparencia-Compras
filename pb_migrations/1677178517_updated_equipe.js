migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ipi572r6rnb18jg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o0leeap0",
    "name": "funcoes",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("ipi572r6rnb18jg")

  // remove
  collection.schema.removeField("o0leeap0")

  return dao.saveCollection(collection)
})
