To generate the missing Docker image(s), please run:
  ./gradlew -Pprod bootRepackage buildDocker in /Users/p.besson/github/Architecture_REST/gateway
  ./gradlew -Pprod bootRepackage buildDocker in /Users/p.besson/github/Architecture_REST/produit

In development to launch the JHipster registry use the following command:

docker-compose -f jhipster-registry.yml up -d