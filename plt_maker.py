import matplotlib.pyplot as plt

f = plt.figure()
plt.plot([1,2,3], [4,5,6])
plt.savefig('img_1.jpg', dpi = 50)
plt.savefig('img_2.jpg')
plt.savefig('img_3.jpg', dpi = 200)