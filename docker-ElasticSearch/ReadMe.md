# !!!!! WARING NON SUPPORTED SECTION !!!!! 

Going over installing docker or elastic search is beyond the scope of the course. Here is how I was running my instance. This is not the point of the course. I just added to be friendly.

# Want to learn more about Docker?

Check out my courses

**Docker for Developers - Newest Version 1.12 with Swarm Mode**

https://www.udemy.com/course/909244/manage/goals/

**Docker and Continuous Integration: Code, Build, Test, Deploy**

https://www.udemy.com/course/1031292/




# #1  Install Docker 

Go here and install docker

   https://www.docker.com/products/overview

# #2 Run Docker-Compose Up
Once installed open a command prompt/ Terminal in the folder you have the docker-compose.yml file in and and run

 
 ### Start the Cluster
 docker-compose up
 
 ### Verify its up
 To verify its up go to localhost:9200 / 127.0.0.1 / or whatever your dockers root ip and then port 9200 mine looks like this:
 
 **url:** http://docker.local:9200/
 
 **username:** elastic
 
 **password:** changeme
 
 ### Stop the Cluster
 
 To stop the cluster, type docker-compose down. Data volumes will persist, so it’s possible to start the cluster again with the same data using docker-compose up. To destroy the cluster and the data volumes just type docker-compose down -v.
 
 