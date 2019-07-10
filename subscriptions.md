```javascript
subscription {
	message {
    where: {
      AND:[
        { mutation_in: CREATED },
        { node: { room: { id: " najgn2jn1j4n1uiewgbaie"} } }
      ]
    }
  } {
    node {
      id
      text
    }
  }
}
```

### option

 **where —>**

- **mutation_in —> created deleted updated 가능**
- **node —> 특정 노드가 바뀌는것만 캐치할때**