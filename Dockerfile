# Start with a base image containing Java runtime
FROM adoptopenjdk/openjdk11:alpine-jre

# Add Maintainer Info
LABEL maintainer="freitasallan@gmail.com"

# Add the service itself
ARG JAR_FILE="myservice-1.0.0.jar"
RUN apk add maven
WORKDIR /app
COPY . /app/
RUN mvn -f /app/pom.xml clean install -DskipTests
WORKDIR /app
COPY target/${JAR_FILE} /usr/share/${JAR_FILE}

ENTRYPOINT ["java", "-jar", "/usr/share/myservice-1.0.0.jar"]