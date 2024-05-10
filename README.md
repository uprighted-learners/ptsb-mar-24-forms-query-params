# Form Review
a `<form>` is an HTML element that contains input elements

  * when the user enters data into these input elements
  * and clicks the "Submit" button
  * then the browser will wrap up all those values and send it to the server

[MDN: form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

---

# Form Review Cont.

```jsx
<form onSubmit={handleSubmit}>
  <label> Name: <input type='text' name='name' value='Alice'></label>
  <br />
  <label> Password: <input type='password' name='password'></label>
  <br />
  <button type='submit'>Login</button>
</form>
```

---


# Middleware to Access the Request Body


`express.urlencoded()` transforms the request's `body` into a JavaScript object.

Middleware can be set up in an `app.use` method, *before you set up your routes or directly inline in the desired route.*

The middleware is used in order from top to bottom. **Order matters.**

---

# Middleware to Access the Request Body

```js
// server.js
// ... more stuff is above this
app.use(express.urlencoded())
```

---

# Sending a Request with a Body

```js
async function postData(url = '', data = {}) {
  
  const response = await fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data) 
  });

  return response.json(); // parses JSON response into JavaScript objects
}

let resultFromServer = await postData('https://example.com/answer', { answer: 42 })
  
  console.log(responseFromServer); // responseFromServer in JSON format

```
[MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)

---

# Receiving a Request with a Body

```js
// server.js
// ... more stuff is above this
app.post("/some/path", (req, res) => {
  console.log(req.body)
})
```

--- 
# Passing Parameters

You can pass parameters from the client to the server in a variety of ways.

Some of the most common are:

* on the Path
  * (after a `/`)
* in a GET request's "query" section
  * (after the `?`)
* in a POST request in JSON format
  * (inside the request body)

---


# Path Parameters


This path
`http://github.com/UprightEducation/til/blob/master/README.md`

would match this route when using `express`:
```js
app.get('/:user/:repo/:section/:branch/:filepath',(req,res)=>{
  console.log(req.params)
})
```

---

# Path Parameters Cont.

`http://github.com/UprightEducation/til/blob/master/README.md`
`/:user/:repo/:section/:branch/:filepath`

```js
{
  user: "UprightEducation",
  repo: "til",
  section: "blob",
  branch: "master",
  filepath: "/README.md"
}
```


---



# Accessing the Params Object on the Server

```js

app.get('/',(req,res)=>{
  console.log(req.params)
})

// {
//   user: "UprightEducation",
//   repo: "til",
//   section: "blob",
//   branch: "master",
//   filepath: "README.md"
}
```

---

# Query Parameters

`github.com/file?user=UprightEducation&repo=til&section=blob&branch=master&filename=README.md`

```js
app.get('/',(req,res)=>{
  console.log(req.query)
})
// {
//   user: "UprightEducation",
//   repo: "til",
//   section: "blob",
//   branch: "master",
//   filepath: "README.md"
}
```

---

# Post Parameters

```
// frontend 
let data = { "user":"UprightEucation","repo":"til","section":"blob","branch":"master","filepath":"/README.md" }
await fetch('/file', { method: 'POST', body: JSON.stringify(data) })

// backend
app.use(express.json());
// ...
app.post('/file', (req,res)=>{
  console.log(req.body)
})
```

---

# CORS

 Cross Origin Resource Sharing requires some **middleware**

 ```js
//imports
app.use(cors())
 ```
--
