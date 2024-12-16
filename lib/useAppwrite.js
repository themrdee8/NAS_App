import { useState, useEffect } from 'react'
import { Alert } from 'react-native'

const useAppwrite = (fn) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = 0;
}