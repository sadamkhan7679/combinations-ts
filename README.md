# combinations-ts
This package allows you to generate all possible combinations of values for an object  with multiple properties. With this package, you can easily test different variations of your application's data. It can be used for automated testing, creating sample data, or any other use case that requires a large number of combinations. ## Installation
You can install the package using


    npm install --save combinations-ts
or

    yarn add combinations-ts

## Usage

    import { generateCombinations } from 'generate combinations'; 
    const values = {
	    color: ["red", "blue", "green"],
	    size: ["small", "medium", "large"]
    };
    const combinations = generateCombinations(values);
    console.log(combinations);

The above code will output:

    [  
	    {"color": "red", "size": "small"},
	    {"color":"red","size": "medium"},  
	    {"color": "red", "size": "large"},  
	    {"color": "blue", "size": "small"},  
	    {"color": "blue", "size": "medium"},  
	    {"color": "blue", "size": "large"},  
	    {"color": "green", "size": "small"},  
	    {"color": "green", "size": "medium"},  
	    {"color": "green", "size": "large"}
	]

## Running the project

Clone the repository



    git clone https://github.com/<username>/generate-combinations.git

Install the dependencies

`npm install`

Run the project

`npm start`

## Contributions

This package is open for contributions. If you find any bugs or have any suggestions for new features, please open an issue or submit a pull request.

## Support

If you found this package helpful, consider buying me a coffee. [![buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/yourusername)