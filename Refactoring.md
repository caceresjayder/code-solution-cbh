# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

/ hasher function have the only responsability of hashing and reuse code

/ strVerifier function have the only responsability of transform data if isn't string and reuse code

/ LengthVerifier function verifies if the string generated is higher than MAX_PARTITION_KEY_LENGTH

Process:
- Verifies if event data is present if not returns "0"
- Verifies if partitionKey is present, if present transform to string then pass it to lengthVerifier who gonna test if is higher than MAX_PARTITION_KEY_LENGTH in positive case gonna return a hash, in negative case returns the key.
- If not transfor the data to string then to generate a hash.

- Each function is separated for be modifiable without affect the functionality of other function. 

### 100% test covered in both cases.