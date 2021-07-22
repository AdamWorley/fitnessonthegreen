const axios = require("axios");
const POST_NODE_TYPE = `Services`;
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.onPreInit = () => console.log("Loaded setmore");

const axiosClient = axios.create({
  baseURL: "https://developer.setmore.com/api/v1/",
  timeout: 30 * 1000, //in milliseconds
});

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType },
  { refreshToken }
) => {
  const getTokenResponse = await axiosClient.get(
    `o/oauth2/token?refreshToken=${refreshToken}`
  );

  const BEARER_TOKEN = getTokenResponse.data.data.token.access_token;

  //TODO: Move keys out into config file
  const getServicesResponse = await axiosClient.get(
    "bookingapi/services/categories/service-category-ea817af3-1a80-4576-ab9f-f85faaab79a2",
    {
      headers: {
        Authorization: "Bearer " + BEARER_TOKEN,
      },
    }
  );

  const services = getServicesResponse.data.data.services;

  const { createNode } = actions;

  // loop through data and create Gatsby nodes
  services.forEach((service) =>
    createNode({
      ...service,
      id: createNodeId(`${POST_NODE_TYPE}-${service.key}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(service),
        contentDigest: createContentDigest(service),
      },
    })
  );

  return;
};

// called each time a node is created
exports.onCreateNode = async ({
  actions: { createNode },
  getCache,
  createNodeId,
  node, // the node that was just created
}) => {
  if (node.internal.type === POST_NODE_TYPE) {
    const fileNode = await createRemoteFileNode({
      // the url of the remote image to generate a node for
      url: node.image_url,
      getCache,
      createNode,
      createNodeId,
      parentNodeId: node.id,
    });

    if (fileNode) {
      node.remoteImage___NODE = fileNode.id;
    }
  }
};
