# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL maintainer="freitasallan@gmail.com"

# Add the service itself
ARG JAR_FILE="Resume-1.0-SNAPSHOT.jar"
RUN apk add maven
WORKDIR /app
COPY . /app/
RUN mvn -f /app/pom.xml clean install -DskipTests
WORKDIR /app
COPY target/${JAR_FILE} /usr/share/${JAR_FILE}

ENTRYPOINT ["java", "-jar", "/usr/share/Resume-1.0-SNAPSHOT.jar"]