db.stores.update(
  {},
  { $pull: { fruits: { $in: ["apples", "oranges"] }, vegetables: "carrots" } },
  { multi: true }
);
