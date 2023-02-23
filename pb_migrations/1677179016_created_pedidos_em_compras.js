migrate((db) => {
  const collection = new Collection({
    "id": "eicl7v71bf86gkq",
    "created": "2023-02-23 19:03:36.784Z",
    "updated": "2023-02-23 19:03:36.784Z",
    "name": "pedidos_em_compras",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ikonclnx",
        "name": "id_pedido",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("eicl7v71bf86gkq");

  return dao.deleteCollection(collection);
})
