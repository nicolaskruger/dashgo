import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Layout } from "../components/Layot";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false
})

const options: ApexCharts.ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-12-29T00:00:00.000Z',
            '2021-12-30T00:00:00.000Z',
            '2021-12-31T00:00:00.000Z',
            '2022-01-01T00:00:00.000Z',
            '2022-01-02T00:00:00.000Z',
            '2022-01-03T00:00:00.000Z',
            '2022-01-04T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [
    { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]


const DashBoard: NextPage = () => {

    const titles = ["Inscritos da semana", "Taxa de abertura"];

    return (
        <Flex direction={"column"} h="100vh">
            <Layout>
                <SimpleGrid
                    flex={"1"}
                    gap={"4"}
                    minChildWidth={"320px"}
                >
                    {titles.map((title, index) => (
                        <Box
                            key={index}
                            p={["6", "8"]}
                            bg={"gray.800"}
                            borderRadius={8}
                            pb={"4"}
                        >
                            <Text
                                fontSize={"lg"}
                                mb={"4"}
                            >
                                {title}
                            </Text>
                            <Chart options={options} series={series} type="area" height={160} />
                        </Box>
                    ))}
                </SimpleGrid>
            </Layout>
        </Flex>
    )
}

export default DashBoard;