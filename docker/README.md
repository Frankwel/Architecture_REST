To generate the missing Docker image(s), please run:
  ./gradlew -Pprod bootRepackage buildDocker in /Users/p.besson/github/Architecture_REST/gateway
  ./gradlew -Pprod bootRepackage buildDocker in /Users/p.besson/github/Architecture_REST/produit

Then start the whole architecture in production mode with:

docker-compose up -d

In development to launch the JHipster registry use the following command:

docker-compose -f jhipster-registry.yml up -d