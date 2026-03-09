<!DOCTYPE html>
<html>
<head>
    <title>Education Hub</title>
</head>

<body>

<h1>Welcome to Education Hub</h1>
<p>Click the button to start learning.</p>

<button onclick="startLearning()">Start Learning</button>

<p id="message"></p>

<script>
function startLearning() {
    document.getElementById("message").innerHTML = "Welcome Student! Keep learning and achieve your goals.";
}
</script>

</body>
</html>