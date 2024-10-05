import tkinter as tk

# Define the two functions
def removedata(i):
    print(f"Data removed for item {i}")

def removeframe(f):
    f.destroy()
    print("Frame removed")

# Create the main window
root = tk.Tk()
root.title("Lambda Example")

# Example data and frame
I = 123  # Example data identifier
frame = tk.Frame(root)
frame.pack(pady=20)

# Create a button and assign the combined lambda function to the command
button = tk.Button(
    root, 
    text="Click Me", 
    command=lambda i=I, f=frame: (removedata(i), removeframe(f))
)
button.pack(pady=20)

# Run the application
root.mainloop()
