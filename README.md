# Run

`# server`
```
node server.js
```

`# client`
```
nc localhost 3000
```

`# client - real time typing`
```
stty -icanon && nc localhost 3000
```

https://user-images.githubusercontent.com/7686877/233840828-6360715b-f6ad-41d7-a688-51eab7f1b64f.mov

<br>

PS. at least 2 clients (in seperated terminals) should be connected to make sense of chat.
 
#### Alternative: run server without cloning repo
 
`# server`
```
curl -s https://raw.githubusercontent.com/feegloo/chat/master/server.js | node
```
