from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    response = generate_response(user_input)
    return jsonify({'response': response})

def generate_response(user_input):
    # Simple response logic
    if user_input.lower() in ['hello', 'hi']:
        return "Hello! How can I assist you today?"
    elif user_input.lower() in ['bye', 'goodbye']:
        return "Goodbye! Have a great day!"
    else:
        return "I'm not sure how to respond to that."

if __name__ == '__main__':
    app.run(debug=True)
