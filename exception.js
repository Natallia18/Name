try {
    let a = 1;
    let b = 0;
    let c = a / b ;
    if (c === Infinity)
        throw new Error("Division by zero is error!");
} catch (err) {
    console.log(err.message);
}
