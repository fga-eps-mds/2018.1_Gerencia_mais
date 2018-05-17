# -*- coding: utf-8 -*-
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer
import yaml
import os

PATH = os.path.dirname(os.path.abspath(__file__))


def get_own_conversation():
    path_conversation = os.path.join(PATH, 'my_conversation.yml')
    conversation = yaml.safe_load(path_conversation)
    return conversation


def get_feedback():
    """Get feedback about new conversation."""
    from chatterbot.utils import input_function
    text = input_function()

    if 'yes' in text.lower():
        return False
    elif 'no' in text.lower():
        return True
    else:
        print("Please  type either 'yes' or 'no' ")
        return get_feedback()


"""Create a firt bot with english corpus trainer getting a best accurancy answer with 90."""
chatbot = ChatBot(
    'First',
    trainer='chatterbot.trainers.ChatterBotCorpusTrainer',
    storage_adapter='chatterbot.storage.SQLStorageAdapter',
    input_adapter="chatterbot.input.TerminalAdapter",
    output_adapter="chatterbot.output.TerminalAdapter",
    logic_adapters=[
        {
            'import_path': 'chatterbot.logic.BestMatch'
        },
        {
            'import_path': 'chatterbot.logic.LowConfidenceAdapter',
            'threshold': 0.90,
        }
    ],
)

"""First, lets train our bot with some data"""
chatbot.set_trainer(ChatterBotCorpusTrainer)
chatbot.train('./my_export.json')
conversation = get_own_conversation()
chatbot.set_trainer(ListTrainer)
chatbot.train(conversation)
# chatbot.train('chatterbot.corpus.english')
CONVERSATION_ID = chatbot.storage.create_conversation()


while True:
    try:
        print("You:")
        input_statement = chatbot.input.process_input_statement()
        statement, response = chatbot.generate_response(
            input_statement, CONVERSATION_ID)
        print("Bot: ", chatbot.output.process_response(response))

        print('\n Is "{}" a coherent response to "{}"? \n'.format(
            response, input_statement))

        if get_feedback():
            print("please input the correct one")
            print("You: ")
            response1 = chatbot.input.process_input_statement()
            chatbot.learn_response(response1, input_statement)
            chatbot.storage.add_to_conversation(
                CONVERSATION_ID, statement, response1)
            print("Responses added to bot!")

    # Press ctrl-c or ctrl-d on the keyboard to exit
    except (KeyboardInterrupt, EOFError, SystemExit):
        break
# Now we can export the data to a file
chatbot.trainer.export_for_training('./my_export.json')
