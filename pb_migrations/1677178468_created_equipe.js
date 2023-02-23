migrate((db) => {
  const collection = new Collection({
    "id": "ipi572r6rnb18jg",
    "created": "2023-02-23 18:54:28.018Z",
    "updated": "2023-02-23 18:54:28.018Z",
    "name": "equipe",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rqziovls",
        "name": "nome",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 4,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xuj8jola",
        "name": "numero",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 9,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ddgfxs6l",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "5kfybdcy",
        "name": "cargo",
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
  const collection = dao.findCollectionByNameOrId("ipi572r6rnb18jg");

  return dao.deleteCollection(collection);
})
