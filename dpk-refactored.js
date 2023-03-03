const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;

  const hasher = (str) => {
    return crypto.createHash("sha3-512").update(str).digest("hex");
  };
  const strVerifier = (candidate) => {
    return typeof candidate !== "string"
      ? JSON.stringify(candidate)
      : candidate;
  };
  const LengthVerifier = (partitionKey) => {
    return partitionKey.length > MAX_PARTITION_KEY_LENGTH
      ? hasher(partitionKey)
      : partitionKey;
  };

  if (!event) {
    return "0";
  }
  if (event.partitionKey) {
    return LengthVerifier(strVerifier(event.partitionKey));
  } else {
    return hasher(strVerifier(event));
  }
};
