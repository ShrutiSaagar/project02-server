**Debug setup for node server**

1. Install VSCode
2. Install Docker plugin in VSCode
3. Ensure Docker desktop is running
4. Ensure launch.json has the attach to docker configuration
```
  {
   "version": "0.2.0",
   "configurations": [
       {
           "type": "node",
           "request": "attach",
           "name": "Node Attach to Docker Container",
           "remoteRoot": "/home/user",
           "localRoot": "${workspaceFolder}", //has to point to project02-server directory
           "port": 9229,
           "address": "localhost",
           "restart": true,
           "skipFiles": [
               "<node_internals>/**"
           ]
       },
   ]
  }
```
5. Docker container configuration to expose port 9229
   1. Change made in Dockerfile
    ```
    # Expose debug port
    EXPOSE 9229
    ```
   2. Change made in run.bash / run.ps1
   ```
   docker run -it -u user -w /home/user -v .:/home/user -p 8080:8080 -p 9229:9229 --name "$image" --rm "$image" bash
   ```

6. In the container run node server with:
``` 
node --inspect=0.0.0.0:9229 app.js
```
7. Run the debug configuration from VSCode's run and debug tab (the node debugger should attach to the process in container)