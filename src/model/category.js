class Category{
  constructor(data){
    this.id;
    this.slug;
    this.name;
    this.description;
    this.parentId;
    this.ancestor = [];
  }

  async static gen(viewer,id){
    //db.categories.find({_id: {$in: product['category_ids']}})
  }
}