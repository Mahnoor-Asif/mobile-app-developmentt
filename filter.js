const names = ["Ayesha", "Alishba", "Mahnoor", "Ayesha"];
const filteredNames = names.filter((name) => {
    return name !== "Alishba"; 
});

console.log(filteredNames);