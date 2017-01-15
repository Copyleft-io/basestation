require 'test_helper'

class DevicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @device = devices(:one)
  end

  test "should get index" do
    get devices_url
    assert_response :success
  end

  test "should get new" do
    get new_device_url
    assert_response :success
  end

  test "should create device" do
    assert_difference('Device.count') do
      post devices_url, params: { device: { category: @device.category, commissioned_on: @device.commissioned_on, cpu: @device.cpu, decommissioned_on: @device.decommissioned_on, description: @device.description, device_type: @device.device_type, disk: @device.disk, environment_id: @device.environment_id, name: @device.name, network_id: @device.network_id, os: @device.os, private_ip: @device.private_ip, public_ip: @device.public_ip, ram: @device.ram, status: @device.status, uid: @device.uid } }
    end

    assert_redirected_to device_url(Device.last)
  end

  test "should show device" do
    get device_url(@device)
    assert_response :success
  end

  test "should get edit" do
    get edit_device_url(@device)
    assert_response :success
  end

  test "should update device" do
    patch device_url(@device), params: { device: { category: @device.category, commissioned_on: @device.commissioned_on, cpu: @device.cpu, decommissioned_on: @device.decommissioned_on, description: @device.description, device_type: @device.device_type, disk: @device.disk, environment_id: @device.environment_id, name: @device.name, network_id: @device.network_id, os: @device.os, private_ip: @device.private_ip, public_ip: @device.public_ip, ram: @device.ram, status: @device.status, uid: @device.uid } }
    assert_redirected_to device_url(@device)
  end

  test "should destroy device" do
    assert_difference('Device.count', -1) do
      delete device_url(@device)
    end

    assert_redirected_to devices_url
  end
end
