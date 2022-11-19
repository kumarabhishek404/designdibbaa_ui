import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Footer from "../../components/footer/footer";
import Navbar from "../../components/header/navbar";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { GetTextures } from '../../services/get'
import Axios from 'axios';
const FileBase64 = require('react-file-base64');

const Admin = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Metal')
  const [cost, setCost] = useState('')
  const [description, setDescription] = useState('')
  const [highlights, setHighlights] = useState('')
  const [details, setDetails] = useState('')
  const [thumbnail, setThumbnail]: any = useState({});
  const [nodeImage, setNodeImage]: any = useState({});
  const [uploadedNodeImage, setUploadedNodeImage]: any = useState('');
  const [uploadedThumbnail, setUploadedThumbnail]: any = useState('');
  const [base64URL, setBase64URL]: any = useState({});

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   const res = fetch("/texture", {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })

  //   console.log(res);

  // })

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  const handleOnChange = (e: any) => {
    console.log("Value", e.target.value, e.target.name);

    switch (e.target.name) {
      case "textureName":
        return setName(e.target.value)

      case "category":
        console.log(e.target.value);

        return setCategory(e.target.value)

      case "cost":
        return setCost(e.target.value)

      case "description":
        return setDescription(e.target.value)

      case "highlights":
        return setHighlights(e.target.value)

      case "details":
        return setDetails(e.target.value)

      default:
        break;
    }
  }

  const handleSubmitForm = async () => {
    console.log("e.target.files[0]", thumbnail);

    let formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("cost", cost);
    formData.append("description", description);
    formData.append("details", details);
    formData.append("highlights", highlights);
    formData.append("href", name);
    formData.append("thumbnail", uploadedThumbnail)
    formData.append("nodeImage", uploadedNodeImage)

    // const payload = {
    //   name: name,
    //   category: category,
    //   cost: cost,
    //   description: description,
    //   details: details,
    //   highlights: highlights,
    //   image: {
    //     fieldname: 'image',
    //     originalname: file.name,
    //     encoding: '7bit',
    //     mimetype: 'image/png'
    //   }
    // }

    console.log("Submiting Form", formData);

    try {
      const response = await Axios({
        url: 'http://localhost:5000/texture',
        method: 'post',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      return response;
    }
    catch (error) {
      throw error;
    }
    // await Axios.post('http://localhost:5000/texture', payload)
    //   .then((res) => {
    //     console.log("Response --", res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  const getBase64 = (file: any) => {
    return new Promise(resolve => {
      let baseURL: any = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        // console.log(baseURL.split(',')[1]);
        setBase64URL(baseURL.split(',')[1])
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e: any) => {
    console.log("e.target.files[0]", e.target);
    if (e.target.files[0]) {

      if (e.target.name === "thumbnail") setThumbnail(e.target.files[0]);
      else if (e.target.name === "nodeImage") setNodeImage(e.target.files[0]);

      getBase64(e.target.files[0])
        .then((result: any) => {
          thumbnail["base64"] = result;
          if (e.target.name === "thumbnail") thumbnail["base64"] = result;
          else if (e.target.name === "nodeImage") nodeImage["base64"] = result;
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
  }

  const handleImageUpload = async (image:any) => {
    console.log(image);
    let img;
    if(image === 'thumbnail') {
      img = thumbnail;
    }
    else if (image === 'nodeImage') {
      img = nodeImage;
    }

    const payload = {
      image: img
    }

    try {
      const response = await Axios({
        url: 'http://localhost:5000/upload',
        method: 'post',
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      console.log(response.data.response.filename);
      if(image === 'thumbnail') {
        setUploadedThumbnail(response.data.response.filename)
      }
      else if (image === 'nodeImage') {
        setUploadedNodeImage(response.data.response.filename)
      }
    }
    catch (error) {
      throw error;
    }
  }

  const textureForm = () => {
    return (
      <div className="overflow-hidden bg-[#ffff00]">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Texture Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Please fill all texture information to show on the user side.</p>
        </div>
        <div className="">
          <dl>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Texture Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="textureName"
                  id="textureName"
                  value={name}
                  autoComplete="given-name"
                  onChange={(e) => handleOnChange(e)}
                  className="p-2 mt-1 block w-full bg-black text-white shadow-sm focus:border-black placeholder:text-white focus:placeholder:text-black focus:ring-black focus:bg-[#ffff00] focus:text-black sm:text-sm"
                  placeholder="Enter Texture Name"
                />
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Category</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="col-span-6 sm:col-span-3">
                  <select
                    id="category"
                    name="category"
                    autoComplete="category"
                    value={category}
                    onChange={(e) => handleOnChange(e)}
                    className="p-2 mt-1 block w-full bg-black text-white shadow-sm focus:border-black placeholder:text-white focus:placeholder:text-black focus:ring-black focus:border-black focus:bg-[#ffff00] focus:text-black sm:text-sm"
                    placeholder="Enter Texture Description"
                  >
                    <option>Metal</option>
                    <option>Things</option>
                    <option>Nature</option>
                    <option>Animals</option>
                  </select>
                </div>
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Cost</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="cost"
                  id="cost"
                  value={cost}
                  onChange={(e) => handleOnChange(e)}
                  autoComplete="cost"
                  className="p-2 mt-1 block w-full bg-black text-white shadow-sm focus:border-black placeholder:text-white focus:placeholder:text-black focus:ring-black focus:bg-[#ffff00] focus:text-black sm:text-sm"
                  placeholder="Enter Texture Cost"
                />
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => handleOnChange(e)}
                  rows={3}
                  className="p-2 mt-1 block w-full bg-black text-white shadow-sm focus:border-black placeholder:text-white focus:placeholder:text-black focus:ring-black focus:bg-[#ffff00] focus:text-black sm:text-sm"
                  placeholder="Enter Texture Description"
                />
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Highlight</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <textarea
                  id="highlights"
                  name="highlights"
                  value={highlights}
                  onChange={(e) => handleOnChange(e)}
                  rows={3}
                  className="p-2 mt-1 block w-full bg-black text-white border-gray-300 shadow-sm focus:border-black placeholder:text-white focus:placeholder:text-black focus:ring-black focus:bg-[#ffff00] focus:text-black sm:text-sm"
                  placeholder="Enter Texture Highlights"
                />
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Details</dt>
              <dd className="mt-1 text-sm text-white sm:col-span-2 sm:mt-0">
                <textarea
                  id="details"
                  name="details"
                  value={details}
                  onChange={(e) => handleOnChange(e)}
                  rows={3}
                  className="p-2 mt-1 block w-full bg-black text-white border-gray-300 shadow-sm focus:border-black placeholder:text-white focus:placeholder:text-black focus:ring-black focus:bg-[#ffff00] focus:text-black sm:text-sm"
                  placeholder="Enter Texture Details"
                />
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Upload thumbnail</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <label
                  htmlFor="thumbnail"
                  className="relative cursor-pointer font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Select an image</span>
                  <input id="thumbnail" name="thumbnail" onChange={handleFileInputChange} type="file" className="sr-only" />
                </label>
                <button
                  onClick={() => handleImageUpload('thumbnail')}
                  type="submit"
                  className="mx-5 inline-flex justify-center border border-black text-black bg-transparent py-1 px-2 text-sm font-medium shadow-sm hover:text-white hover:bg-black hover:border-black focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Upload
                </button>
                <span className='border-b border-b-2 border-black ml-3 text-black pb-1'>{thumbnail && thumbnail?.name || uploadedThumbnail}</span>
                <span className='border-b border-b-2 border-black ml-3 text-black pb-1'>{uploadedThumbnail && uploadedThumbnail}</span>
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Upload node image</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <label
                  htmlFor="nodeImage"
                  className="relative cursor-pointer font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Select an image</span>
                  <input id="nodeImage" name="nodeImage" onChange={handleFileInputChange} type="file" className="sr-only" />
                </label>
                <button
                  onClick={() => handleImageUpload('nodeImage')}
                  type="submit"
                  className="mx-5 inline-flex justify-center border border-black text-black bg-transparent py-1 px-2 text-sm font-medium shadow-sm hover:text-white hover:bg-black hover:border-black focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Upload
                </button>
                <span className='border-b border-b-2 border-black ml-3 text-black pb-1'>{nodeImage && nodeImage?.name}</span>
                <span className='border-b border-b-2 border-black ml-3 text-black pb-1'>{uploadedNodeImage && uploadedNodeImage}</span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-3 text-right sm:px-6">
          <button
            onClick={handleSubmitForm}
            type="submit"
            className="inline-flex justify-center border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#ffff00] hover:text-black hover:border-black focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full overflow-hidden">
      <Navbar />
      <div className="py-16 bg-[#ffff00]">
        {textureForm()}
      </div>
      {/* <div className="py-16 flex flex-col items-center justify-center bg-[#ffff00]">
        <Box sx={{ width: '100%' }} className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-16">
          <Box>
            <Tabs className='text-white' value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className='bg-black text-white hover:bg-[#ffff00] hover:text-black focus:text-black focus:bg-white' sx={{ width: "33.3%" }} label="Textures" {...a11yProps(0)} />
              <Tab className='bg-black text-white hover:bg-[#ffff00] hover:text-black focus:text-black focus:bg-white' sx={{ width: "33.3%" }} label="Models" {...a11yProps(1)} />
              <Tab className='bg-black text-white hover:bg-[#ffff00] hover:text-black focus:text-black focus:bg-white' sx={{ width: "33.3%" }} label="Animations" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {textureForm()}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className='w-full text-center'>
              <DirectionsRunIcon sx={{ fontSize: 200 }} />
              <p className="text-4xl">Models Form is in progress</p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className='w-full text-center'>
              <DirectionsRunIcon sx={{ fontSize: 200 }} />
              <p className="text-4xl">Animation Form is in progress</p>
            </div>
          </TabPanel>
        </Box>
      </div> */}
      <Footer />
    </div>
  );
}

export default Admin;