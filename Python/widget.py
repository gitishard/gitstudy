from tkinter import *
import tkinter.messagebox as messagebox

class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack()
        self.createWidgets()

    def createWidgets(self):
        self.InputLabel=Label(self,text="输入：")
        self.nameInput = Entry(self)
        # self.InputLabel.pack()
        self.nameInput.pack()
        self.alertButton = Button(self, text='Submit', command=self.hello)
        self.alertButton.pack()

    def hello(self):
        name = self.nameInput.get() or 'xiaoyuan'
        messagebox.showinfo('Message', 'Hello, %s' % name)

app = Application()
# 设置窗口标题:
app.master.title('Alert Text')
# 主消息循环:
app.mainloop()