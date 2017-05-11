class Product{
  constructor(productData){
    this.id = productData.id;
    //db.products.createIndex({slug: 1}, {unique: true})
    this.slug = productData.slug;
    //Stock Keep Number
    this.sku = productdata.sku;
    this.name = productData.name;
    this.description = productData.description;
    this.primaryCategory = this.primaryCategory;
    this.otherCategories = [

    ];
    this.unitInStock = productData.unitInStock;
    this.unitOnOrder = productData.unitOnOrder;
    this.reorderLevel = productData.reorderLevel;
    this.discountAvailable = productData.discountAvailable;
    this.thumbnail = productData.thumbnail;
    this.ranking = productData.ranking;
    //notes on product - like only available between December and January
    this.note = productData.note;
    this.shippingDetail = {
      weight:47,
      weight_unit: 'lbs',
    };
    this.price = {
      msrp: 40000,
      retail:40000,
      sale:30000
    };
    this.priceHistory =[
      {
        msrp:40000,
        retail:3444,
        sale:333,
        start: new Date(2014,4,1),
        end: new Data(2010,4,8)
      }
    ];
    this.similarProducts=[

    ]
    this.items=[
      {
        color:'red',
        size:'xm',
        picture:'xxx',
        colorblock:'',
        unitInStock:'',
        unitOnOrder:'',
        unitSold:''
      }
    ]
  }

  get availableColor(){

  }
  get availableSize(){

  }

  async static geSimilar(viewer){

  }
  get picture(){

  }
  async static gen(viewer,id){
    //db.products.find({id:id})
    //product = db.products.findOne({"slug": "wheelbarrow-9092"})
  }
  async static genByCategory(viewer,categoryId){
    //db.products.find({category_ids: ObjectId('6a5b1476238d3b4dd5000048')})
  }
}