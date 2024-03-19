// Defines which database will be used

if (process.env.NODE_ENV == "production") {
    module.exports = {mongoURI: "mongodb+srv://cheptoosherile:fidelOmondi@cluster0.r40itkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"}
} else {
    module.exports = {mongoURI: "mongodb+srv://cheptoosherile:fidelOmondi@cluster0.r40itkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"}
}