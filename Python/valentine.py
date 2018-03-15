import numpy as np
import matplotlib.pyplot as plt

t = np.arange(0,2*np.pi,0.1)
x = 16 * np.sin(t)**3
y = 13 * np.cos(t)-5 * np.cos(2*t) - 2*np.cos(3*t) - np.cos(4*t)

plt.figure(figsize = (8,6), dpi = 80, facecolor = 'darkviolet')
plt.plot(x,y,color='red')
plt.axis('off')
plt.fill(x,y,'hotpink')
plt.text(0, -0.4, 'LOVE YOU', fontsize = 36, fontweight = 'bold', color = 'black',horizontalalignment='center')
plt.show()
