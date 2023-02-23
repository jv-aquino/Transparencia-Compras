migrate((db) => {
  const collection = new Collection({
    "id": "c7ikcvzb3sowbsb",
    "created": "2023-02-23 19:00:56.525Z",
    "updated": "2023-02-23 19:00:56.525Z",
    "name": "faq",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "skmknagk",
        "name": "pergunta",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ovkszmuf",
        "name": "resposta",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c7ikcvzb3sowbsb");

  return dao.deleteCollection(collection);
})
