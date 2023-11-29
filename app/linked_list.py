class LindedListNode:
    def __init__(self):
        self.value = None
        self.next = None

    def __repr__(self):
        temp = self
        while temp != None:
            print(temp.value)
            temp = temp.next
        return ""

    def addNode(self, head, value):
        if head.value == None:
            self.value = value
        else:
            temp = head
            while temp.next != None:
                temp = temp.next
            temp.next = LindedListNode()
            temp.next.value = value
    def delNode(self, head, index):
        if index == 0:
            head.value = None
            return head.next
        else:
            temp = head
            while temp != None:
                if index == 1:
                    break
                index -= 1
                temp = temp.next
            t1 = temp
            # print(t1.value)
            t2 = temp.next.next
            t3 = temp.next
            t1.next = t2
            t3.next = None
            t3.value = None
            return head


###---------------------------TEST--------------------------###
head = LindedListNode()
head.addNode(head, 1)
head.addNode(head, 2)
head.addNode(head, 5)
print(head)
