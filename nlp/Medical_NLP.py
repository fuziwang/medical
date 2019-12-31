import pandas as pd
from jieba.analyse import *

"""
用户文本数据写入、清洗阶段
"""
print('信息输入:')
i=1
file=[]
yy='n'
while yy.upper() not in['是']:
    char=input('请输入您的症状或想查询的问题:')
    file.append(char)
    i=i+1
    yy=input('请问是否输入结束？(输入是结束，其他继续)')
print ('这位用户的病历是:',file)

"""
分词阶段
"""
#对每一条详细病历信息进行分词，并将每一条分好词的病历信息放进DataFrame结构中
import jieba
content_word=[]
for line in file:
    current_segment=jieba.lcut(line)#对每一条病历信息进行分词
    if len(current_segment)>1 and current_segment!='\r\n':
        content_word.append(current_segment)
df_content=pd.DataFrame({'content_word':content_word})#构造dataframe数据
print ('\n','分好词的病历：','\n',df_content['content_word'])  #展示分好词的病历信息

"""
去除停用词、无意义词阶段
"""
#读取本地的停用词文本，可根据需求适量增加，同样使用panda展示出来 ，这里取样为前20个
stopwords=pd.read_table('G:/PracticeData/stopwords.txt',index_col=False,sep='\n',quoting=3,encoding='GB18030',names=['stopwords'])
#stopwords.head(20)
#定义一个去除停用词的函数
def drop_stopwords(df_content,stopwords):
    content_clean=[]
    all_words=[]
    for line in df_content:
        line_clean=[]
        for word in line:
            if word in stopwords:
                continue
            line_clean.append(word)          #整合每条病历信息的分词结果
            all_words.append(str(word))      #将所有病历信息的分词结果放在一个列表里
        content_clean.append(line_clean)     #将每条病历信息的分词结果整合成一个列表
    return content_clean,all_words
contents =df_content.content_word.values.tolist()  #分好词的病历信息的列表（词列表）
stopwords=stopwords.stopwords.values.tolist()      #停用词的列表
contents_clean,all_words=drop_stopwords(contents, stopwords)   #将上方的两个列表作为输入参数，输入定义的函数中
df_content2=pd.DataFrame({'content_clean':contents_clean})    #将列表转换为DataFrame数据结构
print ('\n','去除停用词后的病历：','\n',df_content2['content_clean'])  #去除停用词、无意义词后的病历信息展示

"""
关键词提取阶段
"""
#将每条处理好的病历信息分别进行合并处理，每条病历信息形成一个列表，列表里只有一个元素
content_clean1=[]
for i in range(df_content2.shape[0]):
    df_content_str="".join(df_content2['content_clean'][i])
    content_clean1.append(df_content_str)
df_content3=pd.DataFrame({'content_clean1':content_clean1})    #将列表转换为DataFrame数据结构
df_content3.head(10)  #去除停用词、无意义词后的病历信息展示
n=1
for data in df_content3['content_clean1']:
    #使用TF-idf（词频-逆文档频率）方式提取关键词和权重
    print('第%d位病人病历关键词：'%n,end='')
    for keyword in extract_tags(data,topK=4,withWeight=False):    #调用jieba.analyse.extract_tags函数，提取出关键词
        print('%-04s'%keyword,end=' ')
    n+=1
    print('\n')
m=1
for data in df_content3['content_clean1']:
    #使用TF-idf（词频-逆文档频率）方式提取关键词和权重
    print('第%d位病人病历关键词和权重：'%m)
    for keyword,weight in extract_tags(data,topK=4,withWeight=True):
        print('%-4s'%keyword,'%-.3f'%weight)
    m+=1
    print('\n')