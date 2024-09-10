function sendNotification(email) {
    
    const find = email.indexOf("@");

    if (find !== -1) {
        const parts = email.split("@");
        let add = parts[0] + " " + "sent you an email from" + " " + parts[1];
        return add;
    }
    else {
        return "Invalid Email"
    }
}
