let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
  
    buildSentence: function() {
      if (!this.subject || !this.verb || !this.object) {
        return "Incomplete sentence";
      } else {
        return this.subject + " " + this.verb + " " + this.object;
      }
    },
  
    updateProperty: function(property, value) {
      if (property === "subject" ||
          property === "verb" ||
          property === "object") {
        this[property] = value;
      } else {
        return "Invalid property";
      }
    }
  };
  
  // Examples are:
  console.log("First Example Output:",sentenceBuilder.buildSentence()); 
  
  sentenceBuilder.updateProperty("verb", "am learning");
  console.log("\nSecond Example Output::",sentenceBuilder.buildSentence()); 
  
  const result = sentenceBuilder.updateProperty("mood", "happy");
  console.log("\nThird Example Output::",result);  

  sentenceBuilder.updateProperty("verb", "");
  console.log("\nFourth Example Output::",sentenceBuilder.buildSentence());  