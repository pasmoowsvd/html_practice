import matplotlib.pyplot as plt

f = plt.figure()
plt.plot([1,2,3], [4,5,6])
plt.savefig('image/img_1.jpg', dpi = 50)
plt.savefig('image/img_2.jpg')
plt.savefig('image/img_3.jpg', dpi = 100)