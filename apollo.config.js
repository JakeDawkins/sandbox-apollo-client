module.exports = {
  client: {
    name: 'My Client Project',
    includes: ['./src/**/*.graphql'],
    service: {
      name: "my-project",
      localSchemaFile: './schema.graphql'
    }
  },
};
