import datetime
import os
def save(data):
    # place = os.system('pwd')
    if os.path.isdir('saved_notes/'):
        file = open('saved_notes/'+str(datetime.datetime.now()),'w')
        d = data[0]
        t = data[1]
        file.write('Done\n')
        for i in d:
            file.write(i)
            file.write('\n')
        file.write('\ntodo\n')
        for i in t:
            file.write(i)
            file.write('\n')
    else:
        os.mkdir('saved_notes/')