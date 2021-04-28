import nltk
from string import punctuation
from nltk.corpus import stopwords
nltk.download('stopwords')
nltk.download('punkt')
from nltk.tokenize import word_tokenize    #Tokenizing Words
from nltk.tokenize import sent_tokenize    #Tokenizing Sentences

# Cleaning text that is got from meet transcript
def clean(text):
  sample=text.split('**')
  sample.pop(0);
  clean_text=""
  i=0
  for t in sample:
    if i%2!=0:
      clean_text+=str(t)
    i+=1
  return clean_text

# Finding list of stopwords ( Stopwords are those which do not add meaning to sentence)
stop_words = set(stopwords.words("english"))

#Tokenize
def Wtokenize(text):
  words= word_tokenize(text)
  return words

# Frequency table will be storing frquency of each word appearing in input text after removing stop words
# Need: It will be used for finding most relevant sentences as we will be applying this dictionary on every sentence and find its importance over other
def gen_freq_table(text):
  freqTable = dict() 
  words=Wtokenize(text)
  for word in words: 
      word = word.lower() 
      if word in stop_words: 
          continue
      if word in freqTable: 
          freqTable[word] += 1
      else: 
          freqTable[word] = 1
  return freqTable

#Sentence Tokenize
def Stokenize(text):
  sentences = sent_tokenize(text)
  return sentences

#Storing Sentence Scores
def gen_rank_sentences_table(text):
  sentenceValue = dict()                # dictionary storing value for each sentence
  freqTable=gen_freq_table(text)        # Calling function gen_freq_table to get frequency of words
  sentences=Stokenize(text)             # Calling  list of sentences after tokenization

  for sentence in sentences:            
    for word, freq in freqTable.items(): 
        if word in sentence.lower(): 
            if sentence in sentenceValue: 
                sentenceValue[sentence] += freq 
            else: 
                sentenceValue[sentence] = freq 

  return sentenceValue

def summary(text):
  sum=0
  sentenceValue=gen_rank_sentences_table(text)
  for sentence in sentenceValue:
    sum += sentenceValue[sentence]
  avg = int(sum / len(sentenceValue)) 
  summary="" 
  sentences=Stokenize(text)
  for sentence in sentences: 
    if (sentence in sentenceValue) and (sentenceValue[sentence] > (1.2 * avg)): 
        summary += " " + sentence 

  return summary

def main_nltk(inp_text):
  # inp_text=input("Enter the text to be summarized: ")

  # getting text cleaned
  if("**" not in inp_text):
    text=inp_text
  else:
    cleaned_text = clean(inp_text)
    text = cleaned_text
  summary_text=summary(text)
  print("\nModel Summary: ",summary_text)
  
  return summary_text