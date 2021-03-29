from googletrans import Translator
# pip install googletrans==3.1.0a0

LANGUAGE_CODES = {
    'ENGLISH': 'en',
    'HINDI': 'hi',
    'MARATHI': 'mr',
    'ARABIC': 'ar',
    'BENGALI': 'bn',
    'CHINESE': 'zh-CN',
    'FRENCH': 'fr',
    'GUJRATI': 'gu',
    'JAPANESE': 'ja',
    'KANNADA': 'kn',
    'MALAYALAM': 'ml',
    'NEPALI': 'ne',
    'ORIYA': 'or',
    'PORTUGUESE': 'pt',
    'PUNJABI': 'pa',
    'RUSSIAN': 'ru',
    'SPANISH': 'es',
    'TAMIL': 'ta',
    'TELUGU': 'te',
    'URDU': 'ur'
}

def translate_utility(inp_text, inp_lang, op_lang):
    inp_lang, op_lang = inp_lang.upper(), op_lang.upper()
    translator = Translator()
    text_to_translate = translator.translate(inp_text, src= LANGUAGE_CODES[inp_lang], dest= LANGUAGE_CODES[op_lang])
    op_text = text_to_translate.text 
    return(op_text)