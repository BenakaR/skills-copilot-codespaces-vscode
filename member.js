function skillsMember() {
    // Name of the member
    var name = 'John Doe';

    // Public method
    function getName() {
        return name;
    }

    // Public method
    function setName(newName) {
        name = newName;
    }

    // Public method
    function getSkills() {
        return ['HTML', 'CSS', 'JavaScript'];
    }

    // Expose public methods
    return {
        getName: getName,
        setName: setName,
        getSkills: getSkills
    };
}