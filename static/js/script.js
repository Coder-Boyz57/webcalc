function appendValue(value) {
    const expression = document.getElementById('expression');
    expression.value += value;
}

function clearExpression() {
    document.getElementById('expression').value = '';
}

function calculateResult() {
    const expression = document.getElementById('expression').value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.result !== undefined) {
                document.getElementById('expression').value = data.result;
            } else {
                document.getElementById('expression').value = data.error;
            }
        })
        .catch(err => {
            document.getElementById('expression').value = 'Error';
        });
}
