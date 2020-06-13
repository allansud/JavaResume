# Start with a base image containing Java runtime
FROM adoptopenjdk/openjdk11:alpine-jre

# Add Maintainer Info
LABEL maintainer="freitasallan@gmail.com"

# copy the packaged jar file into our docker image
COPY target/Resume-1.0-SNAPSHOT /demo.jar
 
# set the startup command to execute the jar
CMD ["java", "-jar", "/demo.jar"]