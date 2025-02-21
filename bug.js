```javascript
const pipeline = [
  {
    $match: {
      field: 'value'
    }
  },
  {
    $group: {
      _id: '$someField',
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
];

db.collection.aggregate(pipeline).toArray().then(result => {
  console.log(result);
});
```